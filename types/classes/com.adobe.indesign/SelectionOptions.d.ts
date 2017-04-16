/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SelectionOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Adds the object to the existing selection; if no object was 
			 * previously selected, makes the object the only selected 
			 * object.
			 * @type {Adobe.Indesign.SelectionOptions}
			 * @readonly
			 */
			public static readonly ADD_TO: Adobe.Indesign.SelectionOptions;
			/**
			 * Alias for ADD_TO. Adds the object to the existing selection; 
			 * if no object was previously selected, makes the object the 
			 * only selected object.
			 * @type {Adobe.Indesign.SelectionOptions}
			 * @readonly
			 */
			public static readonly addTo: Adobe.Indesign.SelectionOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Deselects the object.
			 * @type {Adobe.Indesign.SelectionOptions}
			 * @readonly
			 */
			public static readonly REMOVE_FROM: Adobe.Indesign.SelectionOptions;
			/**
			 * Alias for REMOVE_FROM. Deselects the object.
			 * @type {Adobe.Indesign.SelectionOptions}
			 * @readonly
			 */
			public static readonly removeFrom: Adobe.Indesign.SelectionOptions;
			/**
			 * Selects the object and deselects any previously selected 
			 * objects.
			 * @type {Adobe.Indesign.SelectionOptions}
			 * @readonly
			 */
			public static readonly REPLACE_WITH: Adobe.Indesign.SelectionOptions;
			/**
			 * Alias for REPLACE_WITH. Selects the object and deselects any 
			 * previously selected objects.
			 * @type {Adobe.Indesign.SelectionOptions}
			 * @readonly
			 */
			public static readonly replaceWith: Adobe.Indesign.SelectionOptions;
			/**
			 * Sets the key object. At least 2 objects must be selected, 
			 * and the key object specified must be one of them.
			 * @type {Adobe.Indesign.SelectionOptions}
			 * @readonly
			 */
			public static readonly SET_KEY: Adobe.Indesign.SelectionOptions;
			/**
			 * Alias for SET_KEY. Sets the key object. At least 2 objects 
			 * must be selected, and the key object specified must be one 
			 * of them.
			 * @type {Adobe.Indesign.SelectionOptions}
			 * @readonly
			 */
			public static readonly setKey: Adobe.Indesign.SelectionOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}