import React from 'react';
import { useLocalStore, observer } from 'mobx-react'; // 6.x or mobx-react-lite@1.4.0

const App: React.SFC<{ foo: string }> = observer(function App() {
    const localState = useLocalStore(() => ({
        count: 0,
        inc() {
            localState.count += 1;
        },
    }));
    return (
        <div>
            <pre>{JSON.stringify({ localState }, null, 2)}</pre>
            <button onClick={localState.inc}>test</button>
        </div>
    );
});

export default App;
