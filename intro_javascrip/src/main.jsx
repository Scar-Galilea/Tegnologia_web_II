// Promesas

const handleResolvedA = (value) => value;
const handleResolvedB = (value) => value;
const handleResolvedC = (value) => value;
const handleRejectedA = (error) => {
  console.error(error);
};
const handleRejectedB = (error) => {
  console.error(error);
};
const handleRejectedC = (error) => {
  console.error(error);
};
const handleRejectedAny = (error) => {
  console.error(error);
};

const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then(handleResolvedA, handleRejectedA)
  .then(handleResolvedB, handleRejectedB)
  .then(handleResolvedC, handleRejectedC);


myPromise
  .then(handleResolvedA)
  .then(handleResolvedB)
  .then(handleResolvedC)
  .catch(handleRejectedAny);


