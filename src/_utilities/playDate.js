export const numberDateLocale = () => {
   const now = new Date();
   const day = String(now.getDate()).padStart(2, "0");
   const month = String(now.getMonth() + 1).padStart(2, "0");
   const year = now.getFullYear();
   const hours = String(now.getHours()).padStart(2, "0");
   const minutes = String(now.getMinutes()).padStart(2, "0");
   const seconds = String(now.getSeconds()).padStart(2, "0");

   return day + month + year + hours + minutes + seconds;
};

export const fullDateLocale = (date) => {
   let today;
   if (date) {
      today = new Date(date);
   } else {
      today = new Date();
   }

   return today.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
   });
};

export const fullDate = (date) => {
   let today;
   if (date) {
      today = new Date(date);
   } else {
      today = new Date();
   }

   return today.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
   });
};

export const formatDate = (isoString) => {
   const date = new Date(isoString);
   const year = date.getFullYear();
   const month = String(date.getMonth() + 1).padStart(2, "0");
   const day = String(date.getDate()).padStart(2, "0");
   return `${year}-${month}-${day}`;
};

export const untilWeek = (date) => {
   const now = new Date();
   const target = new Date(date);

   const selisihMs = target - now;

   const selisihHari = selisihMs / (1000 * 60 * 60 * 24);

   return selisihHari > -7;
};

export const countdown = (targetDate) => {
   const now = new Date();
   const target = new Date(targetDate);

   const selisihMs = target - now;

   if (selisihMs <= 0) return "over";

   const selisihMenit = Math.floor(selisihMs / (1000 * 60));
   const hari = Math.floor(selisihMenit / (60 * 24));
   const jam = Math.floor((selisihMenit % (60 * 24)) / 60);
   const menit = selisihMenit % 60;

   return `${hari} hari, ${jam} jam, ${menit} menit`;
};

export const greetings = () => {
   const now = new Date();
   const hour = now.getHours();

   if (hour >= 5 && hour < 12) {
      return "Good morning!";
   } else if (hour >= 12 && hour < 15) {
      return "Good noon!";
   } else if (hour >= 15 && hour < 18) {
      return "Good afternoon!";
   } else if (hour >= 18 && hour < 22) {
      return "Good evening!";
   } else {
      return "Good night!";
   }
};
