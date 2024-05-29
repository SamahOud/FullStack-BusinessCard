FROM node

# Copy rest of the application code
COPY . .

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD npm run start

# docker build . -t hackeru-client:18.04