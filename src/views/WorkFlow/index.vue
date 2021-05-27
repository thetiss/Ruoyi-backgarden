<template>
<div>
    <h1>get to know Promise</h1>
</div>
</template>

<script>

export default {
  data() {
    return {

    };
  },
  created() {
    // this.getQuick();
    // this.watchPromiseTutorial()
    //   .then((msg) => {
    //     console.log(2, msg);
    //   }).catch((err) => {
    //     console.log(2, err);
    //   });
    // this.getImg();
    this.getAsyncVSsync();
  },
  methods: {
    getAsyncVSsync() {
      console.log(1);
      setTimeout(() => {
        console.log(3);
      }, 5000);
      console.log(2);
    },
    getImg() {
      async function fetchImg() {
        const res = await fetch('coffee.jpg');
        if (!res.ok) {
          throw new Error(`Http Error, ${res.status}`);
        } else {
          return res.blob();
        }
      }
      fetchImg()
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const image = document.createElement('img');
          image.src = url;
          document.body.appendChild(image);
        }).catch((err) => {
          console.log('Error', err);
        });
    },
    // 快速了解Promise resole,reject; .then() .then().catch()
    getQuick() {
      const p = new Promise((resolve, reject) => {
        const a = 1 + 1; // 1+2
        if (a === 2) {
          resolve('Success');
        } else {
          reject(new Error());
        }
      });
      p.then((msg) => {
        console.log(1, 'This is Promise.then()', msg);
      }).catch((msg) => {
        console.log(1, 'This is Promise.catch()', msg);
      });
      return 'msg';
    },
    // Promise callback
    watchPromiseTutorial() {
      const userLeft = true;
      const userWatchOthers = false;
      return new Promise((resolve, reject) => {
        if (userLeft) {
          reject(new Error());
        } else if (userWatchOthers) {
          reject(new Error());
        } else {
          resolve('Bravo, Users is watching your video');
        }
      });
    }
  }
};
</script>
<style>
