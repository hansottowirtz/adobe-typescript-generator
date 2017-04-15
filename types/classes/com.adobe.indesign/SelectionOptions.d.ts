/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SelectionOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Adds the object to the existing selection; if no object was 
			 * previously selected, makes the object the only selected 
			 * object.
			 */
			public static readonly ADD_TO: Adobe.Indesign.SelectionOptions;
			/**
			 * Alias for ADD_TO. Adds the object to the existing selection; 
			 * if no object was previously selected, makes the object the 
			 * only selected object.
			 */
			public static readonly addTo: Adobe.Indesign.SelectionOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Deselects the object. */
			public static readonly REMOVE_FROM: Adobe.Indesign.SelectionOptions;
			/** Alias for REMOVE_FROM. Deselects the object. */
			public static readonly removeFrom: Adobe.Indesign.SelectionOptions;
			/**
			 * Selects the object and deselects any previously selected 
			 * objects.
			 */
			public static readonly REPLACE_WITH: Adobe.Indesign.SelectionOptions;
			/**
			 * Alias for REPLACE_WITH. Selects the object and deselects any 
			 * previously selected objects.
			 */
			public static readonly replaceWith: Adobe.Indesign.SelectionOptions;
			/** Constructor */
			public constructor();
		}
	}
}