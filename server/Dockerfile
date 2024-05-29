FROM node

# Copy rest of the application code
COPY . .

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 9191

# Command to run the app
CMD npm run dev

# docker build . -t hackeru-server:18.04