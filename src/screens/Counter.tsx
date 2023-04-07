import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/slices/counter/counterSlice'
import type { RootState } from '../redux/store/store'

export const Counter = (): JSX.Element => {
  const { value, times } = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <div style={{ marginBottom: '2rem' }}>
          <span
            style={{
              backgroundColor: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.8rem',
              color: 'black'
            }}
          >
              {value}
          </span>
        </div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment +5
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          >
          Decrement
        </button>
        <div>
            <span>
              State changed {times} times
            </span>
        </div>
      </div>
    </div>
  )
}
