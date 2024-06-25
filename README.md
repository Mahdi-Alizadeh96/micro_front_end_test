# Micro Frontend Test

This repository contains a micro frontend architecture example. The project demonstrates how to build a scalable frontend application by splitting it into independent, smaller micro-applications that can be developed, deployed, and maintained separately. Each micro-frontend can be developed with different technologies, providing flexibility and allowing teams to work independently.

## Structure

- **auth (React)**: Handles user authentication and authorization.
- **container (React)**: The main application shell that loads and manages other micro-frontends.
- **dashboard (Vue)**: Displays user-specific information and widgets.
- **marketing (React)**: Manages public-facing content.

## Technologies Used

- **React**
- **Vue**
- **Webpack**

## Micro-Frontend Connection

### Container App
The container app serves as the central point that integrates all the micro-frontends. It acts as the host application, providing a common entry point and managing the loading and interaction of each micro-frontend. The container is responsible for:

- Loading micro-frontends dynamically
- Managing inter-application communication
- Providing a consistent user experience across different micro-frontends

### Integration Mechanism
Micro-frontends communicate and integrate through a combination of shared events, URLs, and state management. Each micro-frontend is independently developed and deployed but follows a common protocol to ensure seamless integration within the container app.

## Webpack Configuration

Each application within the micro-frontend architecture uses Webpack for bundling and module management. Here’s an overview of the Webpack configuration parts:

### Common Configuration Elements

- **Entry**: Specifies the entry point for the application where Webpack starts the bundling process.
- **Output**: Defines the output directory and filenames for the bundled files.
- **Module Rules**: Configuration for loaders to handle different file types (e.g., JavaScript, CSS, images).
- **Plugins**: Enhances Webpack functionality (e.g., HTMLWebpackPlugin for generating HTML files).

### Container App Configuration
- **ModuleFederationPlugin**: Used to load remote modules and expose its own modules to other applications.
  ```js
  new ModuleFederationPlugin({
    name: 'container',
    remotes: {
      auth: 'auth@http://localhost:3001/remoteEntry.js',
      dashboard: 'dashboard@http://localhost:3002/remoteEntry.js',
      marketing: 'marketing@http://localhost:3003/remoteEntry.js',
    },
    shared: packageJson.dependencies,
  });
  ```

### Micro-Frontend Configuration (e.g., Auth App)
- **ModuleFederationPlugin**: Configured to expose its modules and optionally consume other micro-frontends' modules.
  ```js
  new ModuleFederationPlugin({
    name: 'auth',
    filename: 'remoteEntry.js',
    exposes: {
      './AuthApp': './src/bootstrap',
    },
    shared: packageJson.dependencies,
  });
  ```

## Running the Project

To run the project, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Mahdi-Alizadeh96/micro_front_end_test.git
   cd micro_front_end_test
   ```

2. **Install pnpm:**

   If you don't have pnpm installed, you can install it globally:

   ```sh
   npm install -g pnpm
   ```

3. **Install dependencies:**

   ```sh
   pnpm install
   ```

4. **Start the applications:**

   You can start all applications simultaneously using the following command:

   ```sh
   pnpm run start:all
   ```

   project will run in : [http://localhost:8080](http://localhost:8080)

### Running Individual Applications

For solo development, you can run each app on its own port:

1. **Start the Auth app:**

   ```sh
   pnpm run start:auth
   ```

   Access it at [http://localhost:8082](http://localhost:8082)

2. **Start the Marketing app:**

   ```sh
   pnpm run start:marketing
   ```

   Access it at [http://localhost:8081](http://localhost:8081)

3. **Start the Dashboard app:**

   ```sh
   pnpm run start:dashboard
   ```

   Access it at [http://localhost:8083](http://localhost:8083)
