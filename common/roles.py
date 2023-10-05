from dataclasses import dataclass

@dataclass
class Role:
    label : str
    emoji : str
    role_id: int

@dataclass
class RoleEmbed:
    title: str
    description: str
    color: int
    roles : list[Role]


roles = [
    RoleEmbed(
        title = "창작 관련 역할",
        description = "역할을 부여받으려면 아래 버튼을 눌러주세요!",
        color = 0x30b198,
        roles = [
            Role(
                label="Graphic Designer",
                emoji="🎨",
                role_id=1159522899053514752,
            ),
            Role(
                label="Illustrator",
                emoji="🖌",
                role_id=1159522900227920012,
            ),
            Role(
                label="Animator",
                emoji="🎞",
                role_id=1159522901410717796,
            ),
            Role(
                label="3D Modeler",
                emoji="🖼",
                role_id=1159522902610296985,
            ),
            Role(
                label="Musician",
                emoji="🎹",
                role_id=1159522904376086588,
            ),
            Role(
                label="Video Editor",
                emoji="🎬",
                role_id=1159522905969922148,
            ),
        ]
    ),
    RoleEmbed(
        title = "개발 관련 역할",
        description = "역할을 부여받으려면 아래 버튼을 눌러주세요!",
        color = 0x30b198,
        roles = [
            Role(
                label="FE",
                emoji="🧑‍💻",
                role_id=1159522907282743367,
            ),
            Role(
                label="BE",
                emoji="👨‍💻",
                role_id=1159522908553613384,
            ),
            Role(
                label="AI",
                emoji="🤖",
                role_id=1159522909379903631,
            ),
            Role(
                label="Game",
                emoji="🎮",
                role_id=1159522911099572315,
            ),
            Role(
                label="iOS",
                emoji="📱",
                role_id=1159522912345276416,
            ),
            Role(
                label="Android",
                emoji="📱",
                role_id=1159522913507082362,
            ),
            Role(
                label="Cloud",
                emoji="☁️",
                role_id=1159522914756997210,
            ),
            Role(
                label="Devops",
                emoji="🛠",
                role_id=1159522915759431691,
            ),
            Role(
                label="Security",
                emoji="🔒",
                role_id=1159522917089026068,
            ),
            Role(
                label="Embedded",
                emoji="🔌",
                role_id=1159522918498316408,
            ),
        ]
    )
]
