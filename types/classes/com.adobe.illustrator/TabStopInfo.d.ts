/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

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
			 */
			public alignment: Adobe.Illustrator.TabStopAlignment;
			/** the character used for decimal tab stops ( default: . ) */
			public decimalCharacter: string;
			/** the leader dot */
			public leader: string;
			/**
			 * the position of the tab stop expressed in points ( default: 
			 * 0.0 )
			 */
			public position: number;
		}
	}
}