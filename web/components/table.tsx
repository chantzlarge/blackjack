import Card from './card'

export default function Table () {
  return (
    <>
      {/* dealer side */}
      <div className='uk-section'>
        <div className='uk-container'>
          <div className='uk-grid uk-child-width-1-2' data-uk-grid>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
          </div>
        </div>
      </div>
      {/* player side */}
      <div className='uk-section'>
        <div className='uk-container'>
          <div className='uk-grid uk-child-width-1-2' data-uk-grid>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
