/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

const jumpingOnClouds = (c) => {
  let jumpCount = 0;
  
  for(let i = 0; i < c.length - 1; i++) {
    if(c[i] === 0) {
      i++;
    } 
      jumpCount++;
      console.log('i->', i, 'c[i]->', c[i], 'jumpCount', jumpCount);
  }
    
  console.log(jumpCount);
  return jumpCount;
}

jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]);
