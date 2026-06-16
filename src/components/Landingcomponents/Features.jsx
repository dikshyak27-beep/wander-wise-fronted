import React from 'react'
import { CalendarDays, MapPinned, Users, Wallet } from 'lucide-react';
const Features = () => {

    const featuresData = [
  {
    icon: MapPinned,
    title: "Smart Planning",
    description:
      "Create organized itineraries, manage destinations, and keep every travel detail in one place."
  },
  {
    icon: CalendarDays ,
    title: "Trip Scheduling",
    description:
      "Plan travel dates, activities, and reservations efficiently with a clear timeline view."
  },
  {
    icon: Users,
    title: "Group Travel",
    description:
      "Collaborate with travelers, share updates, and coordinate plans seamlessly throughout the journey."
  },
  {
    icon: Wallet,
    title: "Expense Tracking",
    description:
      "Monitor trip budgets, record expenses, and stay informed about spending during travel."
  }
];


    
  return (
    <section className='px-20 py-32'>
        <div>
            <h2  className='text-5xl font-bold mb-24 text-center'>Features</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
             featuresData.map((feature, index , )=>{
                    return(
                        <div>
                            {feature.title}
                        </div>
                    )
                })


            }

        </div>
    </section>
  )
}

export default Features