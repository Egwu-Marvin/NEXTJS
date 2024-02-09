import Link from "next/link"
import MailIcons from "./MailIcons"

export const data = [
    {
      id: 1,
      title: "Meeting Agenda",
      time: "01/11/2023",
      sender: "John Doe",
      content: [
        "Curabitur nec vehicula odio. Donec non libero nec odio placerat euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus elit. Nam sit amet nisi nec nulla sollicitudin bibendum eget nec nulla. Nulla facilisi. Integer vitae tempus est. Proin aliquet velit sit amet dolor dapibus, in fermentum lorem fermentum.",
        "Nulla auctor risus at velit ultrices suscipit. Ut semper massa ut neque suscipit, at blandit ex elementum. Sed interdum, metus in dapibus dictum, libero sapien tempor dui, sit amet egestas leo ligula vitae turpis. Donec dapibus odio eget accumsan vehicula.",
        "Mauris nec malesuada enim. Phasellus in tortor sed felis pulvinar dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus nec ligula id lacus luctus scelerisque. Sed feugiat magna eget ligula tristique cursus.",
        "Vivamus nec ultrices ante, nec consectetur nulla. Proin id nunc id sapien aliquet faucibus nec vitae elit. Aenean malesuada nec nisl vitae consectetur. Proin ac tellus ut sem suscipit bibendum.",
        "Phasellus vel vestibulum libero, eget convallis justo. Aliquam pretium magna ac eros sodales, non finibus odio fermentum. Sed eu odio eu tortor efficitur efficitur. Fusce id leo pretium, tempus magna eget, molestie justo. Nam at lectus euismod, facilisis turpis eu, placerat quam."
      ]
    },
    {
      id: 2,
      title: "Weekly Report",
      time: "01/11/2023",
      sender: "Jane Smith",
      content: [
        "Mauris nec malesuada enim. Phasellus in tortor sed felis pulvinar dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus elit. Nam sit amet nisi nec nulla sollicitudin bibendum eget nec nulla. Nulla facilisi. Integer vitae tempus est. Proin aliquet velit sit amet dolor dapibus, in fermentum lorem fermentum.",
        "Nulla auctor risus at velit ultrices suscipit. Ut semper massa ut neque suscipit, at blandit ex elementum. Sed interdum, metus in dapibus dictum, libero sapien tempor dui, sit amet egestas leo ligula vitae turpis. Donec dapibus odio eget accumsan vehicula.",
        " Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus nec ligula id lacus luctus scelerisque. Sed feugiat magna eget ligula tristique cursus."
      ]
    },
    {
      id: 3,
      title: "Project Update",
      time: "01/11/2023",
      sender: "Alice Johnson",
      content: [
        "Nam sit amet nisi nec nulla sollicitudin bibendum eget nec nulla. Nulla facilisi. Integer vitae tempus est. Proin aliquet velit sit amet dolor dapibus, in fermentum lorem fermentum.",
        "Nulla auctor risus at velit ultrices suscipit. Ut semper massa ut neque suscipit, at blandit ex elementum. Sed interdum, metus in dapibus dictum, libero sapien tempor dui, sit amet egestas leo ligula vitae turpis. Donec dapibus odio eget accumsan vehicula."
      ]
    },
    {
      id: 4,
      title: "Monthly Review",
      time: "01/11/2023",
      sender: "Michael Brown",
      content: [
        "Hello Everyone",
          "Nulla auctor risus at velit ultrices suscipit. Ut semper massa ut neque suscipit, at blandit ex elementum. Sed interdum, metus in dapibus dictum, libero sapien tempor dui, sit amet egestas leo ligula vitae turpis. Donec dapibus odio eget accumsan vehicula.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus elit. Nam sit amet nisi nec nulla sollicitudin bibendum eget nec nulla. Nulla facilisi. Integer vitae tempus est. Proin aliquet velit sit amet dolor dapibus, in fermentum lorem fermentum."
      ]
    },
    {
      id: 5,
      title: "Task Assignment",
      time: "01/11/2023",
      sender: "David Wilson",
      content: [
        "Sed ut purus elit. Nam sit amet nisi nec nulla sollicitudin bibendum eget nec nulla. Nulla facilisi. Integer vitae tempus est. Proin aliquet velit sit amet dolor dapibus, in fermentum lorem fermentum.",
        "Nulla auctor risus at velit ultrices suscipit. Ut semper massa ut neque suscipit, at blandit ex elementum. Sed interdum, metus in dapibus dictum, libero sapien tempor dui, sit amet egestas leo ligula vitae turpis. Donec dapibus odio eget accumsan vehicula."
      ]
    },
  ]


  export default function Main() {

  const fullData = data.map((datum) => (
    <section key={datum.id} className="py-3 border-y">
        <Link href={`/inbox/${datum.title.split(' ').join('-').toLowerCase()}`} className="flex items-center space-x-4 ">
            <MailIcons />

            <h2 className="w-1/5">{datum.sender}</h2>

            <h2>{(datum.title +'- '+ datum.content[0]).length >= 40 ?
            (datum.title +'- '+ datum.content[0]).slice(0,60)+ '...' : 
            (datum.title+'- '+datum.content[0])}</h2>
        </Link>
    </section>
  ))
  

  return (
    <div>
        {fullData}
    </div>
  )
}
