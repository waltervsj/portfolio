import { Controller, Get, Param } from '@nestjs/common'
import { ProjetoProvider } from './projeto.provider'
import { Projeto } from '@core'

@Controller('projetos')
export class ProjetoController {
	constructor(private readonly projetoProvider: ProjetoProvider) {}

	@Get()
	async obterTodos(): Promise<Projeto[]> {
		return await this.projetoProvider.obterTodos()
	}

	@Get(':id')
	async obterTodas(@Param('id') id: string): Promise<Projeto | null> {
		return await this.projetoProvider.obterPorID(Number(id))
	}
}
