import React from 'react';
import {observer, useLocalStore} from 'mobx-react';

const App: React.FC<{}> = observer(function App() {
    const localState = useLocalStore(() => ({
        count: 0,
        inc() {
            localState.count += 1;
        },
        get oddOrEven() {
            return this.count % 2 ? 'odd' : 'even';
        }
    }));
    return (
        <div>
            <pre>{JSON.stringify({localState}, null, 2)}</pre>
            {localState.oddOrEven}
            <button onClick={localState.inc}>test</button>
        </div>
    );
});

export default App;
