export const Quote = ({data}) => {
    return (
        <>
            {
                data.map(obj => 
                    <blockquote key={obj.sentence} className='blockquote text-end'>
                        <p className='mb-3'>{obj.sentence}</p>
                        <footer className='blockquote-footer'>{obj.character.name}</footer>
                    </blockquote>   
                )
            }
        </>
    )
}

