console.log(rxjs);

const { of, pipe, range, from, Observable } = rxjs;
//const numOf = of()

const { filter, map, min } = rxjs.operators;

const numOf = of(12, 25, 89, 4, 63).pipe(
  filter((ele) => ele > 20),
  map((ele) => ele * 2),
  min()
);

numOf.subscribe((ele) => console.log(ele));

const numRange = range(5, 25).pipe(filter((ele) => ele % 2 === 0));

numRange.subscribe((ele) => console.log(ele));

const arr = [12, 25, 89, 4, 63];
const numFrom = from(arr).pipe(map((ele) => ele / 2));

numFrom.subscribe((ele) => console.log(ele));

const obs = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
  }, 5000);
  setTimeout(() => {
    subscriber.next(5);
  }, 6000);
  subscriber.next(6);
  //subscriber.error("Error 404!!!");
  //subscriber.complete();
}).pipe(filter((ele) => ele % 2 === 0));

obs.subscribe(
  (ele) => console.log(ele),
  (err) => console.error("Error:" + err),
  () => console.log("Completed!")
);

let index = 0;
const obsInterval = new Observable((subscriber) => {
  setInterval(() => {
    subscriber.next(index++);
  }, 1000);
});

let obsSubInterval = obsInterval.subscribe(
  (ele) => console.log(ele),
  (err) => console.error("Error:" + err),
  () => console.log("Completed!")
);

setTimeout(() => {
  obsSubInterval.unsubscribe();
}, 10000);
