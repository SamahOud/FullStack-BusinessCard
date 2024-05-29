import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useUser } from "../providers/UserProvider";
import useAxios from "../../../../core/hooks/useAxios";
import { getUsersByID, login, signup, updateUser } from "../services/usersApiService";
import { getUser, removeToken, setTokenInLocalStorage } from "../services/localStorageService";
import ROUTES from "../../../../core/routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";

const useUsers = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const { user, setUser, setToken} = useUser();

    const [query, setQuery] = useState({ q:"", isBusiness: false });
    const [filteredUsers, setFilteredUsers] = useState(null);
    const [searchParams] = useSearchParams();

    useAxios();

    useEffect(() => {
        setQuery({
            q: searchParams.get("q") ?? "",
            // if this true 
            isBusiness: searchParams.get("isBusiness") === "true" ?? false
        })
    }, [searchParams]);

    useEffect(() => {
        if(users) {
            const filtered = users.filter(u => (
                    u.name.first.includes(query.q) || 
                    u.name.last.includes(query.q)
                ) && ( // או שהוא כלום או שהוא המחרוזת
                    !query.isBusiness || query.isBusiness === String(u.isBusiness))
            );
            setFilteredUsers(filtered);
        }
    }, [query, users])

    const requestStatus = useCallback((loading, errorMessage, users, user = null) => {
        setLoading(loading);
        setError(errorMessage);
        setUsers(users);
        setUser(user);
    },[setUser]);


    const handleLogin = useCallback( async (user) => {
        try {
            const token = await login(user);
            setTokenInLocalStorage(token);
            setToken(token);
            const userFromLocalStorage = getUser();
            requestStatus(false, null, null, userFromLocalStorage);
            navigate(ROUTES.CARDS);
        } catch (error) {
            requestStatus(false, error.message, null);   
        }
    }, [navigate, requestStatus, setToken]);


    const handleSignup = useCallback(async (user) => {
        try {
            const normalizedUser = normalizeUser(user);
            await signup(normalizedUser);
            await handleLogin({ email: user.email, password: user.password });
        } catch (error) {
            requestStatus(false, error.message, null);   
        }
    }
    ,[requestStatus, handleLogin]);


    const handleEditUser = useCallback(async (user, id) => {
        try {
            setLoading(true);
            const userUpdate = await updateUser(user, id);
            requestStatus(false, null, null, userUpdate);
            navigate(ROUTES.MY_CARDS);
        }
        catch (error) {
            requestStatus(false, error.message, null);
        }
    }, []);


    const handleGetUser = useCallback(async (id) => {
        try {
            setLoading(true);
            const usersId = await getUsersByID(id);
            requestStatus(false, null, null, usersId);
        } catch (error) {
            requestStatus(false, error.message, null);
        }
    }, []);

    const handleLogout = useCallback(() => {
        removeToken();
        setToken(null);
        setUser(null);
    }, [setUser, setToken]);


    const value = useMemo(() => ({
        users,
        user,
        loading,
        error
    }), [users, user, loading, error]);

    return {
        ...value,
        handleLogin,
        handleLogout,
        handleSignup,
        handleEditUser,
        handleGetUser,
    }
}

export default useUsers;