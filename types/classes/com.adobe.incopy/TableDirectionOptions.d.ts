/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TableDirectionOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Set left to right table direction
			 * @type {Adobe.Incopy.TableDirectionOptions}
			 * @readonly
			 */
			public static readonly LEFT_TO_RIGHT_DIRECTION: Adobe.Incopy.TableDirectionOptions;
			/**
			 * Alias for LEFT_TO_RIGHT_DIRECTION. Set left to right table 
			 * direction
			 * @type {Adobe.Incopy.TableDirectionOptions}
			 * @readonly
			 */
			public static readonly leftToRightDirection: Adobe.Incopy.TableDirectionOptions;
			/**
			 * Set right to left table direction
			 * @type {Adobe.Incopy.TableDirectionOptions}
			 * @readonly
			 */
			public static readonly RIGHT_TO_LEFT_DIRECTION: Adobe.Incopy.TableDirectionOptions;
			/**
			 * Alias for RIGHT_TO_LEFT_DIRECTION. Set right to left table 
			 * direction
			 * @type {Adobe.Incopy.TableDirectionOptions}
			 * @readonly
			 */
			public static readonly rightToLeftDirection: Adobe.Incopy.TableDirectionOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}