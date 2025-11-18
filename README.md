# Mock-Playlist-API

This is a mock API for managing playlists, built with Express.js and TypeScript.

## Getting Started

### Installation

1.  Navigate to the project directory:
    ```bash
    cd Mock-Playlist-API
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Available Scripts

In the project directory, you can run:

*   `npm run dev`: Starts the server in development mode using `nodemon`. This will automatically restart the server whenever you make changes to your source files.
*   `npm run build`: Compiles the TypeScript code into JavaScript, outputting the compiled files to the `dist` directory.
*   `npm start`: Runs the compiled JavaScript server from the `dist` folder. This is typically used for production environments after running `npm run build`.

## API Endpoints

The following endpoints are available:

*   `GET /`: Returns a welcome message.
*   `GET /api/playlists`: Retrieves a list of all playlists.
*   `GET /api/playlists/:id`: Retrieves a single playlist by its ID.
*   `POST /api/playlists`: Creates a new playlist.
    *   **Request Body Example:**
        ```json
        {
          "name": "My New Playlist",
          "songs": ["Song E", "Song F"]
        }
        ```
