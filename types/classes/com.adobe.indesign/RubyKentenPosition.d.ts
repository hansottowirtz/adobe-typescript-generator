/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RubyKentenPosition extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Places kenten or ruby to the right and above the parent 
			 * character.
			 * @type {Adobe.Indesign.RubyKentenPosition}
			 * @readonly
			 */
			public static readonly ABOVE_RIGHT: Adobe.Indesign.RubyKentenPosition;
			/**
			 * Alias for ABOVE_RIGHT. Places kenten or ruby to the right 
			 * and above the parent character.
			 * @type {Adobe.Indesign.RubyKentenPosition}
			 * @readonly
			 */
			public static readonly aboveRight: Adobe.Indesign.RubyKentenPosition;
			/**
			 * Places kenten or ruby to the left and below the parent 
			 * character.
			 * @type {Adobe.Indesign.RubyKentenPosition}
			 * @readonly
			 */
			public static readonly BELOW_LEFT: Adobe.Indesign.RubyKentenPosition;
			/**
			 * Alias for BELOW_LEFT. Places kenten or ruby to the left and 
			 * below the parent character.
			 * @type {Adobe.Indesign.RubyKentenPosition}
			 * @readonly
			 */
			public static readonly belowLeft: Adobe.Indesign.RubyKentenPosition;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}