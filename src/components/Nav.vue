<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

//megamenu
const items = ref([
  {
    label: 'Videos',
    icon: 'pi pi-fw pi-video',
    items: [
      [
        {
          label: 'Video 1',
          items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
        },
        {
          label: 'Video 2',
          items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
        }
      ],
      [
        {
          label: 'Video 3',
          items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
        },
        {
          label: 'Video 4',
          items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
        }
      ]
    ]
  },
  {
    label: 'Users',
    icon: 'pi pi-fw pi-users',
    items: [
      [
        {
          label: 'User 1',
          items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
        },
        {
          label: 'User 2',
          items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
        }
      ],
      [
        {
          label: 'User 3',
          items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
        },
        {
          label: 'User 4',
          items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
        }
      ],
      [
        {
          label: 'User 5',
          items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
        },
        {
          label: 'User 6',
          items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
        }
      ]
    ]
  },
  {
    label: 'Events',
    icon: 'pi pi-fw pi-calendar',
    items: [
      [
        {
          label: 'Event 1',
          items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
        },
        {
          label: 'Event 2',
          items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
        }
      ],
      [
        {
          label: 'Event 3',
          items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
        },
        {
          label: 'Event 4',
          items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
        }
      ]
    ]
  },
  {
    label: 'Settings',
    icon: 'pi pi-fw pi-cog',
    items: [
      [
        {
          label: 'Setting 1',
          items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
        },
        {
          label: 'Setting 2',
          items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
        },
        {
          label: 'Setting 3',
          items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
        }
      ],
      [
        {
          label: 'Technology 4',
          items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
        }
      ]
    ]
  }
])
</script>

<template>
  <div class="vavi">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/sample">Sample</RouterLink>
        <RouterLink to="/top">Top</RouterLink>
      </nav>
      <Sidebar v-model:visible="visible">
        <h2>Sidebar</h2>
        <RouterLink to="/">Home</RouterLink><br />
        <RouterLink to="/sample">Sample</RouterLink><br />
        <RouterLink to="/top">Top</RouterLink><br />
        <MegaMenu :model="items" orientation="vertical" />
      </Sidebar>
      <Button icon="pi pi-ellipsis-h" @click="visible = true" />
    </header>
  </div>
</template>

<style scoped>
.navi {
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
