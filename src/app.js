console.log('Hello world!');

if (process.env.NODE_ENV === 'development') {
  console.log('Happy developing!');
}

console.log(process.env.WP_URL);
