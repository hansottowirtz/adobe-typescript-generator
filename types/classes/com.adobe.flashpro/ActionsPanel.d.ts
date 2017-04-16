/// <reference path="../../packages/com.adobe.flashpro/index.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * Object which hangs off fl.The actionsPanel Object contains 
		 * methods and properties which allow developers to manipulate 
		 * code in the actionsPanel.
		 */
		class ActionsPanel extends Adobe.Csawlib.CSHostObject {
			/**
			 * returns the class of which a specified variable is a member. 
			 * Note that the insertion cursor or selection of text must 
			 * follow the variable definition at the time this method is 
			 * called.
			 * @param {string} ASvar This argument is a string which 
			 * matches the name of an ActionScript variable.
			 */
			public getClassForObject(ASvar: string): string;
			/**
			 * returns true if the Actions Panel is in assist mode, false 
			 * otherwise.
			 */
			public getScriptAssistMode(): boolean;
			/**
			 * returns a string representing the currently selected 
			 * characters in the Actions Panel.
			 */
			public getSelectedText(): string;
			/**
			 * method which returns all the characters of the Actions Panel 
			 * as a string.
			 */
			public getText(): string;
			/**
			 * method which returns the selection state in the 
			 * actionsPanel. If no code is selected in the Actions Panel, 
			 * then this method will return false, true otherwise.
			 */
			public hasSelection(): boolean;
			/**
			 * replaces the characters in the current selection with the 
			 * characters in the string argument.
			 * @param {string} text string of characters with which to 
			 * replace selected text.
			 */
			public replaceSelectedText(text: string): void;
			/**
			 * toggles the Actions Panel between assist mode and expert 
			 * mode.
			 * @param {boolean} bool a value of true or false is required. 
			 * True sets the actions panel to Script Assist Mode, false 
			 * will set it to Expert Mode.
			 */
			public setScriptAssistMode(bool: boolean): boolean;
			/**
			 * sets the selection in the Actions Panel based upon start and 
			 * end indices.
			 * @param {number} startIndex zero-based number representing 
			 * index of the first character of a span in the actions Panel.
			 * @param {number} endIndex zero-based number representing 
			 * index of the last character of a span in the actions Panel.
			 */
			public setSelection(startIndex: number, endIndex: number): boolean;
			/**
			 * sets or resets the entire Actions Panel content to the 
			 * string represented by the method's text argument.
			 * @param {string} text string which represents characters to 
			 * be added to the Actions Panel.
			 */
			public setText(text: string): void;
			/**
			 * Forces the Actions panel to update based on the current 
			 * selection on stage (version < AS3) or the current selected 
			 * timeline frame.
			 */
			public updateFromStageSelection(): void;
		}
	}
}