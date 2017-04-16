/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * A ToolObj object is a JavaScript object that represents an 
		 * individual tool. ToolObj can be obtained from the Tools 
		 * object or from the activeTool property of the Tool object. 
		 * Used only when creating extensible tools
		 */
		class ToolObj extends Adobe.Csawlib.CSHostObject {
			/**
			 * An integer specifying the depth of the tool in the popup. 
			 * Used only when creating extensible tools.
			 * @type {number}
			 * @readonly
			 */
			public readonly depth: number;
			/**
			 * An integer specifying the resource ID of the tool. 
			 * Extensible tools have an iconID of -1. Used only when 
			 * creating extensible tools.
			 * @type {number}
			 * @readonly
			 */
			public readonly iconID: number;
			/**
			 * An integer specifying the position of the tool in the 
			 * toolbar. Used only when creating extensible tools.
			 * @type {number}
			 * @readonly
			 */
			public readonly position: number;
			/**
			 * Enables or disables the specified control in a PI. Used only 
			 * when creating extensible tools
			 * @param {string} control The name of the control to enable or 
			 * disable.  Legal values depend on the PI invoked by this tool 
			 * (see setPI method). Used only when creating extensible 
			 * tools.
			 * @param {boolean} enable 
			 * @returns {void}
			 */
			public enablePIControl(control: string, enable: boolean): void;
			/**
			 * Identifies a png file to use as a tool icon in the Flash 
			 * toolbar.  If no cursors are specified the standard arrow 
			 * cursor is displayed. Used only when creating extensible 
			 * tools
			 * @param {string} file Name of the png file to use as the 
			 * icon. PNG file must be placed in tools directory.
			 * @returns {void}
			 */
			public setIcon(file: string): void;
			/**
			 * Sets the string that appears in the popup menu for the tool. 
			 * Used only when creating extensible tools.
			 * @param {string} menuStr String to appear in the popup menu 
			 * for the tool.
			 * @returns {void}
			 */
			public setMenuString(menuStr: string): void;
			/**
			 * Associates an xml file with the tool to be displayed in a 
			 * modal panel invoked by an "Options..." button in the PI. 
			 * Used only when creating extensible tools.
			 * @param {string} xmlFile Name of the xml file that has the 
			 * description of the tool's options.
			 * @returns {void}
			 */
			public setOptionsFile(xmlFile: string): void;
			/**
			 * Set a particular property inspector to be used when the tool 
			 * is activated.  Allowable values are "shape", "text", and 
			 * "movie".  The shape PI is used as a default if no PI is 
			 * specified. Used only when creating extensible tools.
			 * @param {string} pi The property inspector to invoke for this 
			 * tool
			 * @returns {void}
			 */
			public setPI(pi: string): void;
			/**
			 * Assigns a name to the tool. This name is used in the 
			 * configuration of the toolbar. The name is used only by the 
			 * xml layout file. Used only when creating extensible tools.
			 * @param {string} name The name of the tool
			 * @returns {void}
			 */
			public setToolName(name: string): void;
			/**
			 * Set the tooltip that is displayed when the mouse is held 
			 * stationary over the tool icon. Used only when creating 
			 * extensible tools.
			 * @param {string} toolTip The tooltip to use for the tool.
			 * @returns {void}
			 */
			public setToolTip(toolTip: string): void;
			/**
			 * Shows or hides a control in the PI. Used only when creating 
			 * extensible tools.
			 * @param {string} control The name of the control to enable or 
			 * disable.  Legal values depend on the PI invoked by this tool 
			 * (see setPI method). Used only when creating extensible 
			 * tools.
			 * @param {boolean} show True to show the control, false to 
			 * hide the control.
			 * @returns {void}
			 */
			public showPIControl(control: string, show: boolean): void;
			/**
			 * This method is called in the configureTool function of 
			 * extensible tools to indicate the free transform handles 
			 * should be displayed when the tool is active. Used only when 
			 * creating extensible tools.
			 * @param {boolean} show true to show the handles, false not 
			 * to.
			 * @returns {void}
			 */
			public showTransformHandles(show: boolean): void;
		}
	}
}