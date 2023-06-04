const express = require('express');
const app = express();

/**
 * @module API
 */

/**
 * Index Route
 * @name Index
 * @path {GET} /
 */
app.get('/', (req,res) => {
  res.send('Welcome');
});

/**
 * List Users
 * @name  Users
 * @path {GET} /users
 */
app.get('/users', (req,res) => {
  res.send('Welcome');
});

/**
 * List all products
 * @name Products
 * @path {GET} /products
 */
app.get('/products', (req,res) => {
  res.send('Welcome');
});

/**
 * List categories
 * @name Categories
 * @path {GET} /categories
 */
app.get('/categories', (req,res) => {
  res.send('Welcome');
});