<script setup lang="ts">
import { ref } from 'vue';
import {
  SwApi as Api,
  TSwApiResources as Resources,
} from './services/swApi';

const apiResponse = ref('');

const getIndex = async (resource: Resources) => {
  const response = await Api[resource].getIndex();
  apiResponse.value = JSON.stringify(response, null, 2);
  return response;
};

const getPeople = () => getIndex(Resources.PEOPLE);
const getPlanets = () => getIndex(Resources.PLANETS);

const getFirst = async (resource: Resources) => {
  const index = await getIndex(resource);
  apiResponse.value = index.results[0].name;
};

const firstPerson = () => getFirst(Resources.PEOPLE);
const firstPlanet = () => getFirst(Resources.PLANETS);
</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/vue.svg" />
    <h1>Services Layout</h1>
    <hr />
    <h2>Tecnologies</h2>
    <ul>
      <li>Vue</li>
      <li>Vite</li>
      <li>Typescript</li>
      <li>SWAPI</li>
    </ul>
    <hr />
    <h2>Api interface</h2>
    <div><button @click="getPeople">Get people</button></div>
    <div><button @click="firstPerson">First person from index</button></div>
    <div><button @click="getPlanets">Get planets</button></div>
    <div><button @click="firstPlanet">First planet from index</button></div>
    <hr />
    <h2>Api responses</h2>
    <pre>{{ apiResponse }}</pre>
  </div>
</template>
