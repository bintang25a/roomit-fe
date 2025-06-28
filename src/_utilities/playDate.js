export const numberDate = () => {
   return new Date();
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

export const untilWeek = (date) => {
   const now = new Date();
   const target = new Date(date);

   const selisihMs = target - now;

   const selisihHari = selisihMs / (1000 * 60 * 60 * 24);

   return selisihHari > -7;
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
