import DateSelector from "@/app/_components/DateSelector.js";
import ReservationForm from "@/app/_components/ReservationForm.js";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";

async function Reservation({cabin}) {
  const [settings, bookeddates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector />
      <ReservationForm />
    </div>
  );
}

export default Reservation;
