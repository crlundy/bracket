import type { Tournament } from './types.ts';

const tournaments: Tournament[] = [
  {
    title: 'Walt Disney Animation Studios films',
    description:
      '(Almost) every film released by Walt Disney Animation Studios. This does not include Pixar, Walt Disney Television Animation, etc.',
    players: [
      { name: 'Snow White and the Seven Dwarfs', score: 97, image: '' },
      {
        name: 'Pinocchio',
        score: 100,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/89a25bfa-acaa-4ad2-9337-486d67cccc6f/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Fantasia',
        score: 95,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/af5fa330-e60c-43d6-8048-feae3846e923/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      { name: 'Dumbo', score: 95, image: '' },
      { name: 'Bambi', score: 91, image: '' },
      { name: 'Saludos Amigos', score: 82, image: '' },
      { name: 'The Three Caballeros', score: 85, image: '' },
      { name: 'Make Mine Music', score: 58, image: '' },
      { name: 'Fun and Fancy Free', score: 73, image: '' },
      { name: 'Melody Time', score: 69, image: '' },
      { name: 'The Adventures of Ichabod and Mr. Toad', score: 89, image: '' },
      {
        name: 'Cinderella',
        score: 95,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/66526336-ac3a-4514-97d4-217b24483407/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Alice in Wonderland',
        score: 82,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/94dfb3af-0853-45df-8476-ace81688c3d6/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Peter Pan',
        score: 79,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/3ae8e2fb-1ce0-41c3-a4a1-a45e5da57647/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Lady and the Tramp',
        score: 91,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/659266c0-d0ca-413f-91ab-474732dc8f29/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Sleeping Beauty',
        score: 90,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/e1abc2ef-1b3e-48b9-b862-ac1029d4b527/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'One Hundred and One Dalmatians',
        score: 98,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/a13b92c7-39de-4151-95c6-12f67ca597c1/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      { name: 'The Sword in the Stone', score: 65, image: '' },
      {
        name: 'The Jungle Book',
        score: 86,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/fba71ef3-2aff-4020-b47c-ce25f8f07e9a/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      { name: 'The Aristocats', score: 64, image: '' },
      {
        name: 'Robin Hood',
        score: 56,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b2521-ac41-71dd-a264-da7d4386d605/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      { name: 'The Many Adventures of Winnie the Pooh', score: 100, image: '' },
      {
        name: 'The Rescuers',
        score: 79,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/d82bf332-ad60-45e2-8928-fe6b6d438aab/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      { name: 'The Fox and the Hound', score: 75, image: '' },
      { name: 'The Black Cauldron', score: 57, image: '' },
      {
        name: 'The Great Mouse Detective',
        score: 79,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/b9d29e95-8dbb-4418-9fc1-039b109a2976/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Oliver & Company',
        score: 52,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/38812eff-c1f6-4d21-88e9-3275b6f19fae/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'The Little Mermaid',
        score: 92,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/a6132121-27fc-498e-a2da-9430fb3f9ed8/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      { name: 'The Rescuers Down Under', score: 85, image: '' },
      {
        name: 'Beauty and the Beast',
        score: 95,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/f2900f7d-ba6c-48bf-9ab4-a34218d3e6a1/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Aladdin',
        score: 96,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/5dd89695-b48f-4a67-82d7-b54f42f5e92a/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'The Lion King',
        score: 92,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/55719263-0f1a-403c-8195-df5a94193313/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Pocahontas',
        score: 59,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/02791ee1-c91a-4a15-aa9f-b285e0962b17/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      { name: 'The Hunchback of Notre Dame', score: 80, image: '' },
      {
        name: 'Hercules',
        score: 83,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/768046f1-bf56-4f31-bcbf-5b1d063187d6/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Mulan',
        score: 91,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b39a9-c0af-72f0-8f91-30ec6bd61f5b/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      { name: 'Tarzan', score: 90, image: '' },
      { name: 'Fantasia 2000', score: 80, image: '' },
      {
        name: 'Dinosaur',
        score: 65,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/cec8ab38-9e87-40e9-8419-0c92a4c68b10/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'The Emperor’s New Groove',
        score: 86,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/a7fc56d2-3afe-458a-a9c3-a8ea0e600572/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Atlantis: The Lost Empire',
        score: 48,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/0ff8b5b2-5622-4b8d-8db7-f1d8fbb215aa/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Lilo & Stitch',
        score: 86,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/1c1695f4-cd0c-4b5d-9f34-b8dc256b8e3d/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Treasure Planet',
        score: 68,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/780908f9-37ac-433e-8112-1f93bbf795fc/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Brother Bear',
        score: 38,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b251d-7cb8-7cb5-a4df-08e9ba6dc82a/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      { name: 'Home on the Range', score: 51, image: '' },
      {
        name: 'Chicken Little',
        score: 36,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/df47979b-11f1-4107-8173-73ffe6daa843/compose?format=webp&label=standard_regular_prompt_178&width=800',
      },
      { name: 'Meet the Robinsons', score: 68, image: '' },
      {
        name: 'Bolt',
        score: 90,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019edadf-b7b3-74de-8fa3-0a06ca8206ae/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'The Princess and the Frog',
        score: 86,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/b0f38c70-70f9-4f97-8aa4-6a316fbdcb6b/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Tangled',
        score: 89,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/e466040f-2a12-46a1-9233-38b444b84269/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Winnie the Pooh',
        score: 90,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b2f48-a626-7464-a14b-6fcca100dbc1/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Wreck-It Ralph',
        score: 87,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/1b641caa-f49f-4719-ba2a-e1e8e0b47b1d/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Frozen',
        score: 89,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/bc5f1b5e-737c-457d-ad7f-3e6562aad446/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Big Hero 6',
        score: 90,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019eb6f0-1df5-7ae6-9cdc-75bd8db552a2/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Zootopia',
        score: 98,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019b2eff-a3ec-75c0-b82f-ec2415a5b04e/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Moana',
        score: 95,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/c0eae5c5-5f8c-4bc9-9ae1-b7e8ec472c80/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Ralph Breaks the Internet',
        score: 88,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/96c01c2b-1593-4467-b004-8dc16b325515/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Frozen 2',
        score: 77,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/2d93752a-cbd1-4251-95dc-eb5f65049514/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Raya and the Last Dragon',
        score: 93,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/44526b94-436c-46c3-b9dc-9844e861d763/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Encanto',
        score: 92,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/6ca563ca-2076-440c-ac2e-4a6663cd4bfa/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Strange World',
        score: 72,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/08cda706-3d39-4ec6-9d0b-22833a3feffd/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Wish',
        score: 48,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/77fb2118-f4e5-46ce-9b7c-f42e59604b25/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Moana 2',
        score: 61,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/7f06993f-bb7a-442a-be28-ea326642f07b/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
      {
        name: 'Zootopia 2',
        score: 92,
        image:
          'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/019d1d25-3ddd-73f2-8f35-ebb74dbf86b1/compose?format=webp&label=standard_art_vertical_071&width=800',
      },
    ],
  },
  {
    title: 'Chips',
    description: 'Brands and flavors of chips',
    players: [
      { name: 'Doritos Nacho Cheese' },
      { name: 'Doritos Cool Ranch' },
      { name: 'Doritos Spicy Nacho' },
      { name: 'Doritos Spicy Sweet Chili' },
      { name: 'Doritos Golden Sriracha' },
      { name: 'Doritos Tapatío' },
      { name: 'Pringles' },
      { name: 'Sour Cream & Onion Pringles' },
      { name: 'Salt & Vinegar Pringles' },
      { name: 'Pizza Pringles' },
      { name: 'BBQ Pringles' },
      { name: 'Honey Mustard Pringles' },
      { name: 'Extra Hot Chili Lime Pringles' },
      { name: 'Fritos' },
      { name: 'Chili Cheese Fritos' },
      { name: 'Fritos Scoops' },
      { name: 'Takis Original' },
      { name: 'Takis Fuego' },
      { name: 'Classic Lay’s' },
      { name: 'Barbecue Lay’s' },
      { name: 'Sour Cream & Onion Lay’s' },
      { name: 'Salt & Vinegar Lay’s' },
      { name: 'Baked Lay’s' },
      { name: 'Wavy Lay’s' },
      { name: 'Lay’s Stax' },
      { name: 'Tostitos' },
      { name: 'Tostitos Scoops' },
      { name: 'Tostitos Hint of Lime' },
      { name: 'Mission Tortilla Strips' },
      { name: 'Late July Tortilla Chips' },
      { name: 'Cheetos Crunchy' },
      { name: 'Cheetos Crunchy Flamin’ Hot' },
      { name: 'Cheetos Puffs' },
      { name: 'Cheetos Puffs Flamin’ Hot' },
      { name: 'Chester’s Fries' },
      { name: 'Ruffles Original' },
      { name: 'Ruffles Cheddar & Sour Cream' },
      { name: 'Ruffles Sour Cream & Onion' },
      { name: 'Ruffles All Dressed' },
      { name: 'Sun Chips' },
      { name: 'French Onion Sun Chips' },
      { name: 'Harvest Cheddar Sun Chips' },
      { name: 'Garden Salsa Sun Chips' },
      { name: 'Funyuns' },
      { name: 'Bugles' },
      { name: 'Veggie straws' },
      { name: 'Kettle Potato Chips Sea Salt' },
      { name: 'Kettle Potato Chips Jalapeño' },
      { name: 'Kettle Krinkle Cut Potato Chips Salt & Fresh Ground Pepper' },
      { name: 'Hawaiian Sweet Maui Onion Kettle Style Potato Chips' },
      { name: 'PopCorners Sea Salt' },
      { name: 'PopCorners White Cheddar' },
      { name: 'Stacy’s Simply Naked Pita Chips' },
      { name: 'Miss Vickie’s Sea Salt' },
      { name: 'Miss Vickie’s Jalapeño' },
      { name: 'Miss Vickie’s Dill Pickle' },
      { name: 'popchips Sea Salt' },
      { name: 'popchips Barbeque' },
      { name: 'Cheez-It Snap’d' },
      { name: 'Terra Classic' },
      { name: 'Torres Black Truffle' },
      { name: 'Chili & Lime Flavored Rolled Tortilla Chips' },
      { name: 'Turtle Chips Sweet Corn Flavor' },
      { name: 'Turtle Chips Honey Butter Flavor' },
    ],
  },
];

export default tournaments;
