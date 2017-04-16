/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class IndexCapitalizationOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Capitalizes all index entries. Note: Capitalizes only topics 
			 * created before the capitalization statement appears in the 
			 * script.
			 * @type {Adobe.Indesign.IndexCapitalizationOptions}
			 * @readonly
			 */
			public static readonly ALL_ENTRIES: Adobe.Indesign.IndexCapitalizationOptions;
			/**
			 * Capitalizes all level 1 entries. Note: Capitalizes only 
			 * topics created before the capitalization statement appears 
			 * in the script.
			 * @type {Adobe.Indesign.IndexCapitalizationOptions}
			 * @readonly
			 */
			public static readonly ALL_LEVEL_1_ENTRIES: Adobe.Indesign.IndexCapitalizationOptions;
			/**
			 * Alias for ALL_ENTRIES. Capitalizes all index entries. Note: 
			 * Capitalizes only topics created before the capitalization 
			 * statement appears in the script.
			 * @type {Adobe.Indesign.IndexCapitalizationOptions}
			 * @readonly
			 */
			public static readonly allEntries: Adobe.Indesign.IndexCapitalizationOptions;
			/**
			 * Alias for ALL_LEVEL_1_ENTRIES. Capitalizes all level 1 
			 * entries. Note: Capitalizes only topics created before the 
			 * capitalization statement appears in the script.
			 * @type {Adobe.Indesign.IndexCapitalizationOptions}
			 * @readonly
			 */
			public static readonly allLevel1Entries: Adobe.Indesign.IndexCapitalizationOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Capitalizes the specified topic and its nested topics. Valid 
			 * only as parameter of the topic capitalize method; cannot be 
			 * used as a parameter of the index capitalize method. Note: 
			 * Must occur after the selected topic and its nested subtopics 
			 * are created.
			 * @type {Adobe.Indesign.IndexCapitalizationOptions}
			 * @readonly
			 */
			public static readonly INCLUDE_SUBENTRIES: Adobe.Indesign.IndexCapitalizationOptions;
			/**
			 * Alias for INCLUDE_SUBENTRIES. Capitalizes the specified 
			 * topic and its nested topics. Valid only as parameter of the 
			 * topic capitalize method; cannot be used as a parameter of 
			 * the index capitalize method. Note: Must occur after the 
			 * selected topic and its nested subtopics are created.
			 * @type {Adobe.Indesign.IndexCapitalizationOptions}
			 * @readonly
			 */
			public static readonly includeSubentries: Adobe.Indesign.IndexCapitalizationOptions;
			/**
			 * Capitalizes the specified topic but does not capitalize its 
			 * nested topics. Valid only as parameter of the topic 
			 * capitalize method; cannot be used as a parameter of the 
			 * index capitalize method. Note: Must occur after the 
			 * specified topic and its nested topics are created.
			 * @type {Adobe.Indesign.IndexCapitalizationOptions}
			 * @readonly
			 */
			public static readonly SELECTED_ENTRY: Adobe.Indesign.IndexCapitalizationOptions;
			/**
			 * Alias for SELECTED_ENTRY. Capitalizes the specified topic 
			 * but does not capitalize its nested topics. Valid only as 
			 * parameter of the topic capitalize method; cannot be used as 
			 * a parameter of the index capitalize method. Note: Must occur 
			 * after the specified topic and its nested topics are created.
			 * @type {Adobe.Indesign.IndexCapitalizationOptions}
			 * @readonly
			 */
			public static readonly selectedEntry: Adobe.Indesign.IndexCapitalizationOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}