/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TableDirectionOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Set left to right table direction
			 * @type {Adobe.Indesign.TableDirectionOptions}
			 * @readonly
			 */
			public static readonly LEFT_TO_RIGHT_DIRECTION: Adobe.Indesign.TableDirectionOptions;
			/**
			 * Alias for LEFT_TO_RIGHT_DIRECTION. Set left to right table 
			 * direction
			 * @type {Adobe.Indesign.TableDirectionOptions}
			 * @readonly
			 */
			public static readonly leftToRightDirection: Adobe.Indesign.TableDirectionOptions;
			/**
			 * Set right to left table direction
			 * @type {Adobe.Indesign.TableDirectionOptions}
			 * @readonly
			 */
			public static readonly RIGHT_TO_LEFT_DIRECTION: Adobe.Indesign.TableDirectionOptions;
			/**
			 * Alias for RIGHT_TO_LEFT_DIRECTION. Set right to left table 
			 * direction
			 * @type {Adobe.Indesign.TableDirectionOptions}
			 * @readonly
			 */
			public static readonly rightToLeftDirection: Adobe.Indesign.TableDirectionOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}