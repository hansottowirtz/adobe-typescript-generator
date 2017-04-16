/// <reference path="../../packages/com.adobe.cshostadapter/references.d.ts"/>

declare namespace Adobe {
	namespace Cshostadapter {
		class PingEvent extends Adobe.Flash.Events.Event {
			/**
			 * Constructs a new PingEvent with the specified type.
			 * @returns {void}
			 */
			public constructor();
			/**
			 * Defines the value of the type property of a event object.
			 * @type {void}
			 */
			public static readonly PING_SUCCEEDED: any;
			/**
			 * Defines the value of the type property of a event object.
			 * @type {void}
			 */
			public static readonly PING_TIMED_OUT: any;
		}
	}
}