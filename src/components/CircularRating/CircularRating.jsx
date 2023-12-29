import { CircularProgressBar } from 'react-percentage-bar';
import { CircularContainer } from './CircularRating.styled';

export const CircularRating = ({ voteAverage }) => {
  const colorRaiting = () => {
    if (voteAverage.toFixed(1) >= 7) {
      return 'green';
    } else if (voteAverage.toFixed(1) >= 5 && voteAverage.toFixed(1) < 7) {
      return 'yellow';
    } else {
      return 'red';
    }
  };
  return (
    <>
      {voteAverage > 0 && (
        <CircularContainer>
          <CircularProgressBar
            showPercentage={false}
            percentage={voteAverage.toFixed(1) * 10}
            animation={false}
            color={colorRaiting()}
            radius={'22px'}
            size={'4px'}
            text={voteAverage.toFixed(1)}
            backgroundColor={'rgba(0, 0, 0, 0.8)'}
            textStyle={{
              color: 'white',
            }}
            trackColor={'rgba(255, 255, 255, 0.6)'}
          />
        </CircularContainer>
      )}
    </>
  );
};
