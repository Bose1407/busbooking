const axios = require("axios");

async function getAll() {
  try {
    const response = await axios.get(
      "https://todo-api-production-d9c6.up.railway.app/api/tasks",
      {
        title: "My first deployed API",
        description: "Deployed API using Railway, done by Bose",
        dueDate: "2025-02-23",
      }
    );

    console.log("Task Created:", response.data);
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  }
}

getAll();

