const ResponsiveGrid = ({ cols, colsBig, colsMedium, colsSmall, colsTiny, children }) => 
    (<div>
        {children}
        <style jsx>{`
    div {
        display: grid;
        gap: 5px;
        padding: 5px 0;
        grid-template-columns: ${cols};
        box-sizing: border-box;
    }


    @media only screen and (max-width: 600px) {
        div {
            grid-template-columns: ${colsTiny || colsSmall || colsMedium || colsBig || cols};
        }
    }

    @media only screen and (min-width: 600px) {
        div {
            grid-template-columns: ${colsTiny || colsSmall || colsMedium || colsBig || cols};
        }
    }

    @media only screen and (min-width: 768px) {
        div {
            grid-template-columns: ${colsSmall || colsMedium || colsBig || cols};
        }
    }

    @media only screen and (min-width: 992px) {
        div {
            grid-template-columns: ${colsMedium || colsBig || cols};
        }
    }

    @media only screen and (min-width: 1200px) {
        div {
            grid-template-columns: ${colsBig || cols};
        }
    }
`}</style>
</div>);

module.exports = ResponsiveGrid