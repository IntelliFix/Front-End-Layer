import React, { useEffect } from 'react';

function PageTitle() {
    useEffect(() => {
        const originalTitle = document.title;

        const handleVisibilityChange = () => {
            if (document.hidden) {
                document.title = 'Come Back :(';
            } else {
                document.title = originalTitle;
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return null;
}

export default PageTitle;
