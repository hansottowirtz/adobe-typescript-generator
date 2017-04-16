/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class RubyKentenPosition extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Places kenten or ruby to the right and above the parent 
			 * character.
			 */
			public static readonly ABOVE_RIGHT: Adobe.Incopy.RubyKentenPosition;
			/**
			 * Alias for ABOVE_RIGHT. Places kenten or ruby to the right 
			 * and above the parent character.
			 */
			public static readonly aboveRight: Adobe.Incopy.RubyKentenPosition;
			/**
			 * Places kenten or ruby to the left and below the parent 
			 * character.
			 */
			public static readonly BELOW_LEFT: Adobe.Incopy.RubyKentenPosition;
			/**
			 * Alias for BELOW_LEFT. Places kenten or ruby to the left and 
			 * below the parent character.
			 */
			public static readonly belowLeft: Adobe.Incopy.RubyKentenPosition;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}