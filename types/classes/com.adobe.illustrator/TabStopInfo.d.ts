/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * Tab stop information (returned by tab stops from a paragraph 
		 * object)
		 */
		class TabStopInfo extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the alignment of the tab stop ( default: 
			 * TabStopAlignment.Left )
			 * @type {Adobe.Illustrator.TabStopAlignment}
			 */
			public alignment: Adobe.Illustrator.TabStopAlignment;
			/**
			 * the character used for decimal tab stops ( default: . )
			 * @type {string}
			 */
			public decimalCharacter: string;
			/**
			 * the leader dot
			 * @type {string}
			 */
			public leader: string;
			/**
			 * the position of the tab stop expressed in points ( default: 
			 * 0.0 )
			 * @type {number}
			 */
			public position: number;
		}
	}
}