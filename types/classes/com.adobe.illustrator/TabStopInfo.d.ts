/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class TabStopInfo extends IllustratorHostObject {
			/**
			 * the alignment of the tab stop ( default: 
			 * TabStopAlignment.Left )
			 */
			public alignment: TabStopAlignment;
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