# Locale-Aware Date Input Component

This component provides a date input field that adapts its format based on the browser's locale. For `en_US`, the format is `MM/DD/YYYY`; for all other locales, it is `DD/MM/YYYY`. Despite the displayed format, the `v-model` binds dates in the `YYYY-MM-DD` format. This component is built with Vue 3.x using the Composition API and TypeScript, and it's suitable for server-side rendering (SSR) environments.

## Features

- Locale-sensitive date formatting.
- Binding model always in ISO format (`YYYY-MM-DD`).
- Built using Vue 3.x Composition API and TypeScript.
- Server-side rendering (SSR) friendly.

## Installation

To integrate the Locale-Aware Date Input component into your project, include the component in your Vue 3 application:

- Ensure Vue 3 is installed in your project.
- Add the component and utility files to your project structure.

## Usage

Import and use the component in your Vue app:

```
<template>
  <DateInput v-model="dateValue" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DateInput from './path/to/DateInput.vue';

const dateValue = ref('2024-05-15'); // example date
</script>
```

## Running Tests
This component includes tests to ensure functionality:

- Ensure a test runner like Jest is configured to handle Vue 3 and TypeScript.
- Navigate to the component directory.
- Execute the test command (e.g., npm test).

Included Tests:
- Verify correct parsing based on the browser locale.
- Ensure v-model accurately updates with valid inputs.
- Test reactivity to changes in locale.

## Development
To develop the component locally:

- Clone the repository containing the component.
- Install dependencies with npm install.
- Import and integrate the component into your existing Vue 3 project.

## Folder Structure
- src/components: Contains the DateInput component.
- src/utils: Includes utility files like date formatting handlers.

## Dependencies
- Vue 3: Framework for building the user interface.
- dayjs: Library for parsing, validating, and displaying dates.

## Feedback and Contributions
Contributions to improve the component are welcome. Open an issue or submit a pull request if you have suggestions or enhancements.

## Credits
This component was designed to be a part of a larger project or as a standalone feature in web applications that require locale-aware date inputs.
