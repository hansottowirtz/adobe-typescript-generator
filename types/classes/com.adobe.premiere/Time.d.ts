/// <reference path="../../packages/com.adobe.premiere/index.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class Time extends Adobe.Csawlib.CSHostObject {
			public readonly seconds: number;
			public readonly ticks: string;
		}
	}
}