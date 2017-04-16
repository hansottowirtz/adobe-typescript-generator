/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * Text is a subclass of Element and contains the following 
		 * properties in addition to those in Element (which is defined 
		 * in the Timeline spec). The text object represents a single 
		 * text item on the document. All properties on the text 
		 * pertain to the entire text block. To set properites of a 
		 * selection within the text field, the TextRuns object is 
		 * used.To set text properties of the selected text field, use 
		 * dom.setElementProperty(). For example: //assign textVar as 
		 * the name of the variable to the current selected text 
		 * lementProperty(''''''''''''''''variableName'''''''''''''''', 
		 * ''''''''''''''''textVar'''''''''''''''');
		 */
		class Text extends Adobe.Flashpro.Element {
			/**
			 * Equivalent to the Name field in the Accessibility Panel. 
			 * Screen readers identify objects by reading the name aloud. 
			 * This property is not available to dynamic text type.
			 * @type {string}
			 */
			public accName: string;
			/**
			 * the anti-aliasing sharpness for text. This controls how 
			 * crisply the text draws. Only applies when 
			 * 'fontRenderingMode' is 'customThicknessSharpness'
			 * @type {number}
			 */
			public antiAliasSharpness: number;
			/**
			 * the anti-aliasing thickness for text. Only applies when 
			 * 'fontRenderingMode' is 'customThicknessSharpness'
			 * @type {number}
			 */
			public antiAliasThickness: number;
			/**
			 * If TRUE, for static text fields, the bounding width will 
			 * expand to display all text.
			 * 
			 * If TRUE, for dynamic or input text fields, the bounding 
			 * width and height will expand to display all text.
			 * @type {boolean}
			 */
			public autoExpand: boolean;
			/**
			 * if TRUE show border around dynamic or input text, ignored if 
			 * used with static Text.
			 * @type {boolean}
			 */
			public border: boolean;
			/**
			 * Equivalent to the Description field on the Accessibility 
			 * Panel. The description is read by the screen reader.
			 * @type {string}
			 */
			public description: string;
			/**
			 * Allows user to specify specific characters to embed. This 
			 * works just as if entering into the character options dialog. 
			 * 
			 * 
			 * only works with Dynamic or Input Text, will be ignored if 
			 * used with other text types.
			 * @type {string}
			 */
			public embeddedCharacters: string;
			/**
			 * This is a property that can be modified or read from.  It 
			 * consists of a series of delimited integers which correspond 
			 * to the items that can be selected in the character embedding 
			 * options dialog. Only works with dynamic or input text, will 
			 * be ignored if used with static text. NOTE: these also 
			 * correspond to the fontembed xml file inthe configuratiosn 
			 * folder
			 * @type {string}
			 */
			public embedRanges: string;
			/**
			 * Boolean flag to enable embedding variant glyphs.
			 * @type {boolean}
			 */
			public embedVariantGlyphs: boolean;
			/**
			 * Similar to the SymbolInstance.filters array. An array of 
			 * filters applied to the text element.
			 * @type {any[]}
			 */
			public filters: any[];
			/**
			 * Sets the rendering mode for the text. Affect display onstage 
			 * and in the Player. The modes can be:
			 * 'device' - render with device fonts
			 * 'bitmap' - render aliased text
			 * 'standard' - Standard flash text anti-aliasing (MX 2004) 
			 * best for animation
			 * 'advanced' - better readability
			 * 'customThicknessSharpness' - customize the settings
			 * @type {string}
			 */
			public fontRenderingMode: string;
			/**
			 * The number of characters in this text object.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * "single line", "multiline", "multiline no wrap", "password"
			 * 
			 * only works with dynamic or input Text, will be ignored if 
			 * used with static text.   password only works for input text.
			 * @type {string}
			 */
			public lineType: string;
			/**
			 * This specifies the maximum characters the user can enter 
			 * into this text object.
			 * 
			 * only works with Input Text, will be ignored if used with 
			 * other text types.
			 * @type {number}
			 */
			public maxCharacters: number;
			/**
			 * Acceptable values are "horizontal", "vertical left to 
			 * right", and "vertical right to left".
			 * 
			 * only works with Static Text, will be ignored if used with 
			 * other text types.
			 * @type {string}
			 */
			public orientation: string;
			/**
			 * If TRUE draw the text as HTML, interprets embedded HTML 
			 * tags.  
			 * 
			 * only works with Dynamic or Input Text, will be ignored if 
			 * used with other text types.
			 * @type {boolean}
			 */
			public renderAsHTML: boolean;
			/**
			 * If true the text can be scrolled.
			 * 
			 * 
			 * only works with dynamic or input text, will be ignored if 
			 * used with static text.
			 * @type {boolean}
			 */
			public scrollable: boolean;
			/**
			 * If true, the text can be selected.  Input text is always 
			 * selectable.
			 * @type {boolean}
			 */
			public selectable: boolean;
			/**
			 * offset of the end of a text subselection. If there is an 
			 * insertion point or no selection, selectionEnd is equal to 
			 * selectionStart. If selectionEnd is set to a value less than 
			 * selectionStart, selectionStart will be set to selectionEnd.
			 * @type {number}
			 */
			public selectionEnd: number;
			/**
			 * offset of the beginning of a text subselection. 0 is the 
			 * beginning of the text block. If selectionStart == 
			 * selectionEnd there is no subselection.  If selectionStart is 
			 * set to a value greater than selectionEnd, selectionEnd will 
			 * be set to selectionStart.
			 * @type {number}
			 */
			public selectionStart: number;
			/**
			 * This is equivalent to the Shortcut field on the 
			 * Accessibility Panel. 
			 * The shortcut is read by the screen readers. 
			 * This property is not available to dynamic text type.
			 * @type {string}
			 */
			public shortcut: string;
			/**
			 * Enable/disable the object to be accessible. This is 
			 * equivalent to the inverse logic of "Make Object Accessible" 
			 * setting in the Accessibility Panel.
			 * 
			 * silent == true --> Make Object Accessible is unchecked.
			 * 
			 * silent == false --> Make Object Accessible is checked.
			 * @type {boolean}
			 */
			public silent: boolean;
			/**
			 * This is equivalent to the Tab Index field on the 
			 * Accessibility Panel. UI available only in Flash MX 
			 * Professional 2004.
			 * 
			 * Creates a tab order in which objects are accessed when the 
			 * user presses the tab key.
			 * @type {number}
			 */
			public tabIndex: number;
			/**
			 * The array of TextRun objects
			 * @type {any[]}
			 * @readonly
			 */
			public readonly textRuns: any[];
			/**
			 * Acceptable values are "static", "dynamic", "input"
			 * @type {string}
			 */
			public textType: string;
			/**
			 * If true draw text using device fonts.
			 * 
			 * only works with Static Text, will be ignored if used with 
			 * other text types.
			 * @type {boolean}
			 */
			public useDeviceFonts: boolean;
			/**
			 * Contents of text object will be stored in variableName, only 
			 * works with Dynamic or Input Text, will be ignored if used 
			 * with other text types.
			 * @type {string}
			 */
			public variableName: string;
			/**
			 * Gets the attribute specified by attrName associated with the 
			 * text identified by startIndex, endIndex. If the attribute is 
			 * not the same for the specified range 'undefined' will be 
			 * returned. 
			 * 
			 * If the optional parameters are not passed, the function uses 
			 * entire text range.   If only startIndex is passed, the range 
			 * used is a single character at that position.  If startIndex 
			 * and endIndex are passed, the range starts from startIndex 
			 * and goes up to but not including endIndex.
			 * 
			 * returns:
			 * 
			 * the attributes value. 
			 * 
			 * 
			 * See the TextAttr object for a list of names to use for 
			 * attrName, and for the type of values they hold which will be 
			 * returned.
			 * @param {string} attrName Specifies the name of the TextAttrs 
			 * property to be returned.
			 * @param {number} startIndex Index of first character.
			 * @param {number} endIndex Index of last character.
			 * @returns {any}
			 */
			public getTextAttr(attrName: string, startIndex: number, endIndex: number): any;
			/**
			 * Gets the specified range of text. If the optional parameters 
			 * are not passed, the whole text string will be returned. If 
			 * only startIndex is passed, the string starting at index and 
			 * ending at the end of the field will be returned. If 
			 * startIndex and endIndex are passed, the string starting from 
			 * startIndex up to but not including endIndex will be 
			 * returned.
			 * 
			 * RETURNS:
			 * @param {number} startIndex Index of first character.
			 * @param {number} endIndex range of text, starts from 
			 * startIndex up to but not including endIndex
			 * @returns {string}
			 */
			public getTextString(startIndex: number, endIndex: number): string;
			/**
			 * Sets the attribute specified by attrName associated with the 
			 * text identified by startIndex, endIndex. 
			 * 
			 * This function can be used to change attributes of text that 
			 * may span across textRuns, or are portions of existing 
			 * textRuns.  Using it may change the position and number of 
			 * TextRun elements within the this objects textRuns array.
			 * 
			 * If the optional parameters are not passed, the function uses 
			 * the entire text object's character range.   If only 
			 * startIndex is passed, the range used is a single character 
			 * at that position.  If startIndex and endIndex are passed, 
			 * the range starts from startIndex and goes up to but does not 
			 * include the character located at endIndex.
			 * 
			 * See the TextAttr object for a list of names to use for 
			 * attrName, and for the type of values they hold which will be 
			 * returned.
			 * @param {string} attrName Specifies the name of the TextAttrs 
			 * property to be changed.
			 * @param {any} attrValue The value to set the textAttrs 
			 * property to.  Refer to the TextAttrs object for the list of 
			 * property name and values expected.
			 * @param {number} startIndex Index of first character.
			 * @param {number} endIndex starts from startIndex up to but 
			 * not including endIndex.
			 * @returns {void}
			 */
			public setTextAttr(attrName: string, attrValue: any, startIndex: number, endIndex: number): void;
			/**
			 * Change the text within this text object. If the optional 
			 * parameters are not passed, the whole text object will be 
			 * replaced. If only startIndex is passed, the string passed 
			 * will be inserted at this position. If startIndex and 
			 * endIndex are passed, the string passed will replace the 
			 * segment of text starting from startIndex up to but not 
			 * including endIndex.
			 * @param {string} text The argument is a string consisting of 
			 * the characters to be inserted into this text object.
			 * @param {number} startIndex Index of first character to 
			 * replace, or index of character to insert the string before.
			 * @param {number} endIndex starts from startIndex up to but 
			 * not including endIndex.
			 * @returns {void}
			 */
			public setTextString(text: string, startIndex: number, endIndex: number): void;
		}
	}
}