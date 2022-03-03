import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Nav(props) {
    // const { sections, title } = props;

    return (
        <React.Fragment>
            <Toolbar alignItems="center"
                justifyContent="center" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <center>
                    <div size="large">
                        <img src={require("../images/thermopadslogo.png")} />
                    </div>
                </center>

            </Toolbar>

        </React.Fragment>
    );
}

Nav.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }),
    ).isRequired,
    title: PropTypes.string.isRequired,
};

export default Nav;