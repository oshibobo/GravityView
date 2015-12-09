var React = require('react');
var Rows = require('./rows.jsx');

var TabContainer = React.createClass({

    propTypes: {
        key: React.PropTypes.string,
        tabId:React.PropTypes.string,
        activeTab: React.PropTypes.string, // Active Tab
        layoutData: React.PropTypes.object // just the context layout data
    },

    render: function () {

        //todo: refactor
        if( ! this.props.layoutData  ) {
            return null;
        }

        var fieldsRows = this.props.layoutData.rows || [];

        var displayContainer = { display: this.props.tabId === this.props.activeTab ? 'block': 'none' };

        return(
            <div style={displayContainer}>

                <h3>{gravityview_i18n.widgets_title_above} <small>{gravityview_i18n.widgets_label_above}</small></h3>
                <Rows
                    tabId={this.props.tabId}
                    type="widget"
                    zone="header"
                    data={null}
                    />


                <h3>{gravityview_i18n.fields_title_multiple} <small>{gravityview_i18n.fields_label_multiple}</small></h3>
                <Rows
                    tabId={this.props.tabId}
                    type="field"
                    data={fieldsRows}
                />


                <h3>{gravityview_i18n.widgets_title_below} <small>{gravityview_i18n.widgets_label_below}</small></h3>
                <Rows tabId={this.props.tabId} type="widget" zone="footer" data={null} />

            </div>
        );
    }


});

module.exports = TabContainer;