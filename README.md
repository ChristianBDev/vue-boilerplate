## Official QBCore Framework VueJS NUI Boilerplate

## Features

-   Vue 3 Support

## Documentation

https://docs.qbcore.org/qbcore-documentation

## Installation

-   Download the script and then place into your `resources` directory or the directory of your choosing in the `resources` directory
-   Open a terminal in the resource directory and type `cd web` and then run `pnpm install` or `pnpm i` to install dependencies
-   Then run `pnpm run build` or `pnpm build` to build the project
-   Add the resource to your `server.cfg` file with `ensure <resource_name>`

## Usage

-   You can use the NUI by using the `SetNuiFocus(true, true)` function in your client script to open the NUI
-   You can use the `SetNuiFocus(false, false)` function in your client script to close the NUI
-   You can send data to the NUI by using the `SendNUIMessage` function in your client script
-   You can receive data from the NUI by using the `RegisterNUICallback` function in your client script
-   You can open a terminal, navigate to the `web` directory, and run `pnpm run dev` or `pnpm dev` to start the development server for hot reloading
-   You can run `pnpm run watch` or `pnpm watch` to build and watch the project for production to view the code in the server

## License

    QBCore Framework
    Copyright (C) 2021 Joshua Eger

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
