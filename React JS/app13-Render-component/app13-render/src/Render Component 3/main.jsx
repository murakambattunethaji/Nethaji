import React from 'react'

const main = () => {
    return (
        <div>
            <Counters render={(count, handleincreament) => <Clickcounters count={count} handleincreament={handleincreament} />} />

        </div>
    )
}

export default main
