/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SelectionOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Adds the object to the existing selection; if no object was 
			 * previously selected, makes the object the only selected 
			 * object.
			 * @type {Adobe.Incopy.SelectionOptions}
			 * @readonly
			 */
			public static readonly ADD_TO: Adobe.Incopy.SelectionOptions;
			/**
			 * Alias for ADD_TO. Adds the object to the existing selection; 
			 * if no object was previously selected, makes the object the 
			 * only selected object.
			 * @type {Adobe.Incopy.SelectionOptions}
			 * @readonly
			 */
			public static readonly addTo: Adobe.Incopy.SelectionOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Deselects the object.
			 * @type {Adobe.Incopy.SelectionOptions}
			 * @readonly
			 */
			public static readonly REMOVE_FROM: Adobe.Incopy.SelectionOptions;
			/**
			 * Alias for REMOVE_FROM. Deselects the object.
			 * @type {Adobe.Incopy.SelectionOptions}
			 * @readonly
			 */
			public static readonly removeFrom: Adobe.Incopy.SelectionOptions;
			/**
			 * Selects the object and deselects any previously selected 
			 * objects.
			 * @type {Adobe.Incopy.SelectionOptions}
			 * @readonly
			 */
			public static readonly REPLACE_WITH: Adobe.Incopy.SelectionOptions;
			/**
			 * Alias for REPLACE_WITH. Selects the object and deselects any 
			 * previously selected objects.
			 * @type {Adobe.Incopy.SelectionOptions}
			 * @readonly
			 */
			public static readonly replaceWith: Adobe.Incopy.SelectionOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}