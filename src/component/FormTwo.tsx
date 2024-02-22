import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

 const musicTrack = {
    title: "Awesome Song",
    artist: {
      name: "Cool Artist",
      genre: "Pop",
      albums: [
        {
          title: "Best Hits",
          releaseYear: 2022,
          tracks: [
            {
              title: "Awesome Song",
              duration: "3:30",
            }
          ]
        },
        {
          title: "Remixes",
          releaseYear: 2023,
          tracks: [
            {
              title: "Awesome Song (Remix)",
              duration: "5:00",
            },
            {
              title: "Extended Mix",
              duration: "6:30",
            }
          ]
        }
      ]
    },
    releaseDate: "2022-01-15",
    duration: "40:00"
  };

const track = {
    title: "",
    duration: "",
  }

const submitTrack = (data: unknown) => {
  console.log(data);
}

const FormTwo = () => {
 const {register, handleSubmit, control, formState: {errors}} = useForm({defaultValues: musicTrack});
 console.log('Errors', errors);
 const {fields, append, remove } = useFieldArray({
    name: 'artist.albums.0.tracks',
    control
 })
  return (
    <div>
    <form onSubmit={handleSubmit(submitTrack)}>
    <div>
     <div>
     <label htmlFor='title'>Title</label>
     </div>
     <input type='text' id='title'{...register('title', {required: 'Title is required'})}/>
     <p style={{color: 'red', fontSize: '10px'}}>{errors.title?.message}</p>
    </div>
    <p>....................................</p>
    <div>
     <div>
     <label htmlFor='artist'>name</label>
     </div>
     <input type='text' id='artistName' {...register('artist.name', {required: 'Name is required'})}/>
     <p style={{color: 'red', fontSize: '10px'}}>{errors.artist?.name?.message}</p>
    </div>
    <p>....................................</p>
    <p>....................................</p>
    <div>
     <div>
     <label htmlFor='genre'>Genre</label>
     </div>
     <input type='text' id='artistGenre' {...register('artist.genre', {required: 'Genre is required'})}/>
     <p style={{color: 'red', fontSize: '10px'}}>{errors.artist?.genre?.message}</p>
    </div>
    <p>....................................</p>
    <h3>Albums</h3>

    <p>REGGEA</p>
    <div>
     <div>
     <label htmlFor='songTitle'>SongTitle</label>
     </div>
     <input type='text' id='songTitle' {...register('artist.albums.0.title', {required: 'Song Title is required'})}/>
     <p style={{color: 'red', fontSize: '10px'}}>{errors.artist?.albums?.[0]?.title?.message}</p>
    </div>
    <p>....................................</p>
    <div>
     <div>
     <label htmlFor='genre'>Genre</label>
     </div>
     <input type='text' id='artistGenre' {...register('artist.albums.0.releaseYear', {required: 'Genre is required'})}/>
     <p style={{color: 'red', fontSize: '10px'}}>{errors.artist?.albums?.[0]?.releaseYear?.message}</p>
    </div>
    <p>Tracks</p>

    {
       fields.map((field, index) => (
        <>
    <div style={{backgroundColor: 'lightblue'}} key={field.id}>
    <div>
     <div>
     <label htmlFor='songTitle'>Song Title</label>
     </div>
     <input type='text' id='artistGenre' {...register(`artist.albums.0.tracks.${index}.title`, {required: 'Song Title is required is required'})}/>
    <p style={{color: 'red', fontSize: '10px'}}>{errors.artist?.albums?.[0]?.tracks?.[index]?.title?.message}</p>
    </div>
    <div>
     <div>
     <label htmlFor='songTitle'>Duration</label>
     </div>
     <input type='text' id='duration' {...register(`artist.albums.0.tracks.${index}.duration`, {required: 'Duration is required'})}/>
    <p style={{color: 'red', fontSize: '10px'}}>{errors.artist?.albums?.[0]?.tracks?.[index]?.duration?.message}</p>
    </div>
    <div onClick={() => remove(index)}>remove</div>
    </div>
    <div onClick={() => append(track)}>+</div>
    </>
       )) 
    }

    <p>RNB</p>
   <button>Submit</button>
   <DevTool control={control}/>
    </form>

    </div>
  )
}

export default FormTwo