
import PropTypes, { shape } from 'prop-types';

const imageType = shape({
    src: PropTypes.string,
    alt: PropTypes.string
});

const ChildPropTypes = (props) => {
    const { string,
        number,
        boolean,
        object,
        array,
        func,
        arrayOfObjects,
        id,
        specificId,
        exactObject,
        image,
        name,
        node,
        children } = props;

        console.dir(children);
    return (
        <div>
            <h3>ChildPropTypes, {name}</h3>
            {node}: {children}
        </div>
    )
}

ChildPropTypes.propTypes = {
    string: PropTypes.string,
    number: PropTypes.number,
    boolean: PropTypes.bool,
    object: PropTypes.object,
    array: PropTypes.array,
    func: PropTypes.func,
    arrayOfObjects: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    specificId: PropTypes.oneOf(["asd", 1, 2, 3, 4, 5, 67, 87]),
    exactObject: PropTypes.exact({
        key: PropTypes.string,
        second: PropTypes.number,
        third: PropTypes.bool
    }),
    image: imageType.isRequired,
    name: PropTypes.any.isRequired,
    node: PropTypes.node.isRequired,
    // children: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.string]).isRequired
    children:  PropTypes.arrayOf(PropTypes.element).isRequired
};

ChildPropTypes.defaultProps = {
    name: 123
}

export default ChildPropTypes;