import React from 'react';

const CardOpinion = () => {
  return (
    <div className='flex  flex-col m-6  '>
      <div className='flex items-center my-6'>
        <img
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1649746115/amazonas/Ellipse_15_km5ngo.png'
          alt='perfil'
        />
        <span className='mx-4 font-light'>Amazon Customer</span>
      </div>
      <p className='  font-light text-sm md:text-lg md:w-2/3'>
        Electronic view finder is supposed to be the best, but from 5 minutes of
        playing with the camera, EVF is very disappointing - despite 120Hz
        refresh rate, the image is very choppy and laggy, almost like watching a
        retro video game - nauseating. That, and the build quality compared to
        5D Mark III feels very cheap - too much plastic. There are some good
        features though, like auto-focus, high quality video, etc.
      </p>
      <p className='  font-light text-sm md:text-lg my-4 md:w-2/3'>
        UPDATE: The EVF appears to be definitely glitchy. Stuttering aside, 2-3
        times, when it was supposed to turn on by face proximity, it flashed a
        white thick line on its upper edge, and then remained dark. Maybe I got
        a defective unit.
      </p>
      <span>A 45 personas les resultó útil </span>
      <span>Informar de un abuso</span>
      <div className='flex items-center my-6'>
        <img
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1649746115/amazonas/Ellipse_16_jdxb3l.png'
          alt='perfil'
        />
        <span className='mx-4 font-light'>Right Emboyo</span>
      </div>
      <p className='  font-light text-sm md:text-lg md:w-2/3'>
        Long-time Canon DSLR user finally made the switch to mirrorless and now
        won't look back. Amazing piece of technology - focus system and
        low-light performance are astounding. Love that I can use my EF lenses
        with adapter and 24-105 f4 L "kit lens" is a worthy successor to its EF
        counterpart.
      </p>
      <p className='  font-light text-sm md:text-lg my-4 md:w-2/3'>
        My biggest quandary, like many, was whether I needed the extra pixels of
        the R5. Coming from a 20 MP original Canon 6D I'm comfortable with this
        sensor size. For my uses hits the sweet spot between image quality and
        speed/disk space. For birds-in-flight I do miss the extra crop room, but
        have a hard time justifying the extra $1,500 just for that.
      </p>
      <span>A 45 personas les resultó útil </span>
      <span>Informar de un abuso</span>
    </div>
  );
};

export default CardOpinion;
