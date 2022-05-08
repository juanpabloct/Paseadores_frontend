import { Button } from "@mui/material";

export default function TargetDogs({ dogs, titleaction, action }) {
  return (
    <section className="grid md:grid-cols-2 justify-items-center w-3/4 gap-10">
      {dogs.map((item) => {
        const { description, breed, name_dog, image, dog_id, gender } = item;
        return (
          <div
            className="w-4/5 md:w-full flex flex-col  items-center bg-white mb-2 rounded-lg"
            key={dog_id}
          >
            <h3 className="text-2xl">{name_dog}</h3>
            <img src={image} alt="Pug" className="rounded-full h-24 w-24" />
            <h3 className="text-2xl font-semibold">Description:</h3>
            <p className="text-xl">{description}</p>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Dog Breed</h3>
              <p className="text-lg text-center">{breed}</p>
              <h3 className="text-xl font-semibold text-center">Gender</h3>
              <p className="text-lg text-center">{gender}</p>
            </div>
            <div className="w-11/12 my-4">
              <Button
                variant="contained"
                size="medium"
                fullWidth
                color="inherit"
                onClick={() => {
                  action(dog_id);
                }}
              >
                <h3 className="text-zinc-500 font-semibold text-lg">
                  {titleaction}
                </h3>
              </Button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
